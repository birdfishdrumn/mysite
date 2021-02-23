import { graphql, useStaticQuery } from 'gatsby';

const useInstagram = () => {
    const data = useStaticQuery(graphql`
    query {
        allInstaNode(limit: 6
         sort: {fields: timestamp,order: DESC}
        ) {
            nodes {
              id
              caption
              username
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1600, maxHeight: 1600) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
    }
    `)
return data.allInstaNode.nodes.filter(function(node) {
    if (node.localFile === null) {
      return false;
    }
    return true;
}).map(node => ({
    ...node.localFile.childImageSharp,
    id: node.id,
    caption: node.caption,
    username: node.username,
}))
};
export default useInstagram;
