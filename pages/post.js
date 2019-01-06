import {withRouter} from 'next/router'
import Layout from '../components/Layout'

const Content = withRouter((props) => {
    return (
        <div>
            <h1>{props.router.query.title}</h1>
            <p>This is the thing ...</p>
        </div>
    )
})
const Page = (props) => {
    return (
        <Layout>
            <Content />
        </Layout>
    )
}

export default Page