import gql from 'graphql-tag';

export const GET_COUNTRY_INFO = gql`
    {
        Country {
            name
            flag {
                svgFile
            }
        }
    }
`;
