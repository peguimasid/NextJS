import { GetServerSideProps } from 'next';
import SEO from '~/components/SEO';
import { Title } from '~/styles/pages/Home';

interface IProduct {
  id: string;
  title: string;
}

interface HomeProps {
  recommendedProducts: IProduct[];
}


export default function Home({ recommendedProducts }: HomeProps) {
  async function handleSum() {
    const math = (await import('~/lib/math')).default;
    alert(math.sum(3, 5));
  }

  return (
    <div>
      <SEO 
        title="Home"
        image="boost.png"
        shouldIndexPage={false}
      />

      <section>
        <Title>Products</Title>

        <ul>
          {recommendedProducts.map(recommendedProduct => {
            return (
              <li key={recommendedProduct.id}>
                {recommendedProduct.title}
              </li>
            )
          })}
        </ul>
      </section>
      <button onClick={handleSum}>Sum!</button>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recommended`);
  const recommendedProducts = await response.json();

  return {
    props: {
      recommendedProducts
    }
  }
}
