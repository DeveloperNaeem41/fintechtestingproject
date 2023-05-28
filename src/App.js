import './App.css';
import DescriptionModal from './Components/DescriptionModal';

import Header from './Components/Header';
import MainTable from './Components/MainTable';
import Modals from './Components/Modals';
import NavBar from './Components/NavBar';
import SubHeader from './Components/SubHeader';
import Table from './Components/Table';
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
