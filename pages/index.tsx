import { popularProducts, newProducts } from '../data'
import { SubFooter } from '../components/Subfooter'
import { Products } from '../components/Products'
import { Layout } from '../components/Layout'
import { Hero } from '../components/Hero'
import { ViewMoreProductsButton } from '../components/ViewMoreProductsButton'

export default function Home({ hello }): JSX.Element {
  console.log({ hello })
  return (
    <Layout>
      <Hero />
      <Products products={newProducts} title="New Arrivals" id="new-products" />
      <Products products={popularProducts} title="Popular Products" id="popular-products" />
      <ViewMoreProductsButton />
      <SubFooter />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  return {
    props: { hello: 'world' }, // will be passed to the page component as props
  }
}
