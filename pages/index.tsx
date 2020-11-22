import { SubFooter, Products, Layout, Hero } from 'components'
import { Book } from 'shared/types'
import axios from 'axios'

interface HomeProps {
  books: Book[]
}

export default function Home({ books }: HomeProps): JSX.Element {
  return (
    <Layout>
      <Hero />
      <Products products={books} title="All books" />
      <SubFooter />
    </Layout>
  )
}

export async function getServerSideProps(): Promise<{ props: { books: Book[] } }> {
  const {
    data: { books = [] },
  } = await axios.get('http://localhost:3000/api/books')
  return {
    props: { books },
  }
}
