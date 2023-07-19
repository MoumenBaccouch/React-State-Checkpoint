import './App.css';
import ProfileContainer from './ProfileContainer';
function App() {
  const ppl=[
    {
      Fname:'Adele Laurie Blue Adkins',
      bio:'Adele Laurie Blue Adkins MBE is an English singer-songwriter. She is known for her powerful mezzo-soprano vocals and songwriting.',
      photo:'https://th.bing.com/th/id/OIP.qNsCToYsk21N0GotPP2NywHaFV?w=255&h=184&c=7&r=0&o=5&pid=1.7',
      profession:'English singer-songwriter',
    },
    {
      Fname:'Michael Joseph Jackson ',
      bio:'Michael Joseph Jackson (August 29, 1958 – June 25, 2009) was an American singer, songwriter, dancer, and philanthropist.',
      photo:'https://th.bing.com/th?id=ATPOL3A08C2BAED56616C5F36368CE0960A100E715883A18D910E67604275095FD65D&w=300&h=207&rs=1&o=6&oif=webp&pid=SANGAM',
      profession:'an American singer, songwriter, dancer, and philanthropist',
    }, 
    {
      Fname:'Nouhad Wadie Haddad',
      bio:'Nouhad Wadie Haddad, known as Fairuz, is a Lebanese singer. She is considered by many as one of the leading vocalists and most famous singers in the history of the Arab world',
      photo:'https://th.bing.com/th?id=OSK.HEROk66vpCEx4PADi9kjz_8_z3OOtwF24XNHvhHrQ-KYWTo&w=472&h=280&c=13&rs=2&o=6&oif=webp&pid=SANGAM',
      profession:' Lebanese singer',
    },
  ]
  return (
    <div className="App">
      <ProfileContainer ppl={ppl} />
    </div>
  );
}

export default App;
