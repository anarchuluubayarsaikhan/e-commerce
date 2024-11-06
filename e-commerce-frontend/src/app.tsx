// import { liteClient as algoliasearch } from 'algoliasearch/lite';
// import { InstantSearch, SearchBox, Hits } from 'react-instantsearch';

// const searchClient = algoliasearch('MLKXEEH303', 'dc3895feeae585b208d713220c7e40d8');

// function Hit({ hit }:{hit:any}) {
//   return (
//     <article>
//       <img src={hit.image} alt={hit.name} />
//       <p>{hit.information}</p>
//       <h1>{hit.addTag}</h1>
//     </article>
//   );
// }

// export default function App() {
//   return (
//     <InstantSearch searchClient={searchClient} indexName="ecommerce">
//       <SearchBox className='container border border-white'/>
//       <Hits hitComponent={Hit} />
//     </InstantSearch>
//   );
// }