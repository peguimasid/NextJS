import { FormEvent, useState } from "react";
import Link from 'next/link';
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import Prismic from 'prismic-javascript';
import { client } from "~/lib/prismic";
import PrismicDOM from 'prismic-dom';
import { Document } from 'prismic-javascript/types/documents';

import { 
  Container,
  BackToMainPageContainer,
  SearchContainer,
  ProductListItem
} from '~/styles/pages/Search';

interface SearchProps {
  searchResults: Document[];
}

export default function Search({ searchResults }: SearchProps) {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  console.log(searchResults);

  function handleSearch(e: FormEvent) {
    e.preventDefault();

    router.push(`/search?q=${encodeURIComponent(search)}`);

    setSearch('');
  }

  return (
    <Container>
      <BackToMainPageContainer>
        <Link href="/">
          <a> Voltar para página inicial</a>
        </Link>
      </BackToMainPageContainer>
      <SearchContainer>
        <form onSubmit={handleSearch}>
          <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
          <button type="submit">Search</button>
        </form>
      </SearchContainer>

      { loading ? (
        <h1>Carregando...</h1>
      ) : (
        <ul>
          {searchResults.map(product => {
            return (
              <ProductListItem key={product.id}>
                <Link href={`/products/${product.uid}`}>
                  <a>
                    {PrismicDOM.RichText.asText(product.data.title)}
                  </a>
                </Link>
              </ProductListItem>
            )
          })}
        </ul>
      )}
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps<SearchProps> = async(context) => {
  const { q } = context.query;

  if(!q) {
    return { props: { searchResults: [] } };
  }

  const searchResults = await client().query([
    Prismic.Predicates.at('document.type', 'product'),
    Prismic.Predicates.fulltext('my.product.title', String(q))
  ]);

  return {
    props: {
      searchResults: searchResults.results,
    }
  }
}