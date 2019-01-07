import Layout from "../components/Layout"
import Link from "next/link"
import fetch from "isomorphic-unfetch"

const PageLink = (props) => {
    return (
        <li key={props.id}>
            <Link as={`/p/${props.id}`} href={`/post?id=${props.id}`}>
                <a>{props.name}</a>
            </Link>
            <style jsx>
            {`
            li {
                list-style: none;
                margin: 5px 0;
            }
            a {
                text-decoration: none;
            }
            `}
            </style>
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
            <style jsx>{`
            h1, a {
                font-family: "Arial";
            }

            ul {
                padding: 0;
            }
            `}</style>
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