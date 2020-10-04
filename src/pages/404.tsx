import { Container, Title } from '../styles/pages/NotFound';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Container>
      <Title>404 Page Not Found</Title>
      <Link href='/top10'><a>Go to existing page</a></Link>
    </Container>
  )
}