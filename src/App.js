import './App.css';
import DescriptionModal from './Components/DescriptionModal';

import Header from './Components/Header';
import MainTable from './Components/MainTable';
import NavBar from './Components/NavBar';
import SubHeader from './Components/SubHeader';
import TableHeader from './Components/TableHeader';

const App = () => {
  return (
    <div className='parent-class'>
      <Header />
      <NavBar />
      <SubHeader />
      <TableHeader />

      <DescriptionModal />
      <MainTable />
    </div>
  );
};

export default App;
