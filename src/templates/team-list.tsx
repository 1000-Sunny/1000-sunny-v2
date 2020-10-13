import React, { useEffect } from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/layout"
import TeamItem from "../components/item-team"
import Pagination from "../components/pagination"
import { TeamListQuery } from "./__generated__/TeamListQuery"

export default function teamList({ data, pageContext, location }: PageProps<TeamListQuery, {}>) {


    useEffect(() => {
        window.dispatchEvent(new CustomEvent('scroll'))
    }, [])

    const teamItems = data.allMdx.edges.map((item, i) => (
        <TeamItem data={item.node} key={item.node.id} even={(i + 1) % 2 === 0}/>
    ))

    return (
        <Layout
            seo={{
                title: "Team",
            }}
            location={location}
        >
            <div className="py-12 px-4 lg:px-0">
                <div className="title py-8 text-center">
                    <h2 className="font-black text-5xl text-color-1">
                        Il team
                    </h2>
                </div>
                <div className="flex flex-wrap">{teamItems}</div>
                <div className="mt-8 lg:mt-24">
                    <Pagination pageContext={pageContext} type="team" />
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query TeamListQuery($skip: Int!, $limit: Int!) {
        allMdx(
            filter: { fields: { sourceName: { eq: "team" } } }
            sort: { fields: [frontmatter___date], order: DESC }
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        description
                        image {
                            publicURL
                            childImageSharp {
                                fluid(maxWidth: 1920) {
                                    srcSet
                                    ...GatsbyImageSharpFluid
                                }
                                id
                            }
                        }
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`
