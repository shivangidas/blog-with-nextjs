import Layout from "../components/Layout"
import Link from "next/link"
import fetch from "isomorphic-unfetch"

const PageLink = (props) => {
    return (
        <li key={props.id}>
            <Link as={`/p/${props.id}`} href={`/post?id=${props.id}`}>
                <a>{props.name}</a>
            </Link>
        </li>
    )
}
const Index = (props) => (
    <div>
        <Layout>
            <h1>Batman Rules!</h1>
            <ul>
                {props.shows.map(({show}) => (
                    <PageLink id={show.id} name={show.name} key={show.id}/>
                ))}
            </ul>
        </Layout>
    </div>
)
Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()
    console.log("show data fetched: " , data.length);
    return {
        shows :data
    }
}
export default Index;