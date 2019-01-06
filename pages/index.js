import Layout from "../components/Layout"
import Link from "next/link"
const PageLink = (props) => {
    return (
        <li>
            <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
                <a>{props.title}</a>
            </Link>
        </li>
    )
}
const Index = () => (
    <div>
        <Layout>
            <h1>Blogs!</h1>
            <ul>
                <PageLink id="first-blog" title="2019 bucket list"/>
                <PageLink id="second-blog" title="2018 achievements"/>
            </ul>
        </Layout>
    </div>
)
export default Index;