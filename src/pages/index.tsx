import { GetServerSideProps } from 'next';
import Link from 'next/link';
import SEO from '~/components/SEO';
import { client } from '~/lib/prismic';
import Prismic from 'prismic-javascript';
import PrismicDOM from 'prismic-dom';
import { Document } from 'prismic-javascript/types/documents';

import { 
  Container,
  Title,
  ProductListItem
} from '~/styles/pages/Home';
interface HomeProps {
  recommendedProducts: Document[];
}


export default function Home({ recommendedProducts }: HomeProps) {
  return (
    <Container>
      <SEO 
        title="Home"
        image="boost.png"
      />

      <section>
        <Title>Todos os produtos:</Title>

        <ul>
          {recommendedProducts.map(recommendedProduct => {
            return (
            <ProductListItem key={recommendedProduct.id}>
              <Link href={`/products/${recommendedProduct.uid}`}>
                  <a>
                    {PrismicDOM.RichText.asText(recommendedProduct.data.title)}
                  </a>
              </Link>
            </ProductListItem>
            )
          })}
        </ul>
      </section>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const recommendedProducts = await client().query([
    Prismic.Predicates.at('document.type', 'product')
  ])

  return {
    props: {
      recommendedProducts: recommendedProducts.results,
    }
  }
}
