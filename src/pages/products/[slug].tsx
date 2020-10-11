import { client } from '~/lib/prismic';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import PrismicDOM from 'prismic-dom';
import { Document } from 'prismic-javascript/types/documents';

import { 
  Container,
  ImageContainer,
  ProductDetailsContainer
} from '~/styles/pages/Product';

interface ProductProps {
  product: Document;
}

export default function Product({ product }: ProductProps) {
  const router = useRouter();

  if(router.isFallback) {
    return <h1>Carregando...</h1>
  }

  return (
    <Container>
      <ImageContainer>
        <img src={product.data.thumbnail.url} alt={PrismicDOM.RichText.asText(product.data.title)}/>
      </ImageContainer>

      <ProductDetailsContainer>
      <h2>{PrismicDOM.RichText.asText(product.data.title)}</h2>

      <div dangerouslySetInnerHTML={{ __html: PrismicDOM.RichText.asHtml(product.data.description)}} />

      <h3>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.data.price)}</h3>
      </ProductDetailsContainer>

      
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<ProductProps> = async (context) => {
  const { slug } = context.params;

  const product = await client().getByUID('product', String(slug), {});

  return {
    props: {
      product,
    },
    revalidate: 5,
  }
}