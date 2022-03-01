/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TeamListQuery
// ====================================================

export interface TeamListQuery_allMdx_edges_node_frontmatter_image_childImageSharp_fluid {
  srcSet: string;
  base64: string | null;
  aspectRatio: number;
  src: string;
  sizes: string;
}

export interface TeamListQuery_allMdx_edges_node_frontmatter_image_childImageSharp {
  fluid: TeamListQuery_allMdx_edges_node_frontmatter_image_childImageSharp_fluid | null;
  id: string;
}

export interface TeamListQuery_allMdx_edges_node_frontmatter_image {
  /**
   * Copy file to static directory and return public url to it
   */
  publicURL: string | null;
  /**
   * Returns the first child node of type ImageSharp or null if there are no children of given type on this node
   */
  childImageSharp: TeamListQuery_allMdx_edges_node_frontmatter_image_childImageSharp | null;
}

export interface TeamListQuery_allMdx_edges_node_frontmatter {
  title: string;
  description: string | null;
  image: TeamListQuery_allMdx_edges_node_frontmatter_image | null;
}

export interface TeamListQuery_allMdx_edges_node_fields {
  slug: string | null;
}

export interface TeamListQuery_allMdx_edges_node {
  id: string;
  frontmatter: TeamListQuery_allMdx_edges_node_frontmatter | null;
  fields: TeamListQuery_allMdx_edges_node_fields | null;
}

export interface TeamListQuery_allMdx_edges {
  node: TeamListQuery_allMdx_edges_node;
}

export interface TeamListQuery_allMdx {
  edges: TeamListQuery_allMdx_edges[];
}

export interface TeamListQuery {
  allMdx: TeamListQuery_allMdx;
}

export interface TeamListQueryVariables {
  skip: number;
  limit: number;
}
