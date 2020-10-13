/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TeamQuery
// ====================================================

export interface TeamQuery_mdx_frontmatter_banner_childImageSharp_fluid {
  srcSet: string;
  base64: string | null;
  aspectRatio: number;
  src: string;
  sizes: string;
}

export interface TeamQuery_mdx_frontmatter_banner_childImageSharp {
  fluid: TeamQuery_mdx_frontmatter_banner_childImageSharp_fluid | null;
  id: string;
}

export interface TeamQuery_mdx_frontmatter_banner {
  /**
   * Copy file to static directory and return public url to it
   */
  publicURL: string | null;
  childImageSharp: TeamQuery_mdx_frontmatter_banner_childImageSharp | null;
}

export interface TeamQuery_mdx_frontmatter {
  title: string;
  date: any | null;
  description: string | null;
  banner: TeamQuery_mdx_frontmatter_banner | null;
}

export interface TeamQuery_mdx {
  body: string;
  frontmatter: TeamQuery_mdx_frontmatter | null;
}

export interface TeamQuery {
  mdx: TeamQuery_mdx | null;
}

export interface TeamQueryVariables {
  slug: string;
}
