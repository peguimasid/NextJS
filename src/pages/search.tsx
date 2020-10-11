import { FormEvent, useState } from "react";
import Link from 'next/link';
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import Prismic from 'prismic-javascript';
import { client } from "~/lib/prismic";
import PrismicDOM from 'prismic-dom';
import { Document } from 'prismic-javascript/types/documents';

interface SearchProps {
  searchResults: Document[];
}

export default function Search({ searchResults }: SearchProps) {
  const [search, setSearch] = useState('');

  const router = useRouter();

  function handleSearch(e: FormEvent) {
    e.preventDefault();

    router.push(`/search?q=${encodeURIComponent(search)}`);

    setSearch('');
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
        <button type="submit">Search</button>
      </form>

      <ul>
          {searchResults.map(product => {
            return (
              <li key={product.id}>
                <Link href={`/products/${product.uid}`}>
                  <a>
                    {PrismicDOM.RichText.asText(product.data.title)}
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
    </div>
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