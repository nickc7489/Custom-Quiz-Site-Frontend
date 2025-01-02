import {Route, Routes} from 'react-router-dom';

import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import EmailPage from './pages/EmailPage';
import CreatePage from './pages/CreatePage';
import TakePage from './pages/TakePage';
import ResultPage from './pages/ResultPage';
import YourQuizzesPage from './pages/YourQuizzesPage';
import AnalyticsPage from './pages/AnalyticsPage';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage stlye={{justifyContent: "center"}}/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/email" element={<EmailPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/take-quiz" element={<TakePage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/your-quizzes" element={<YourQuizzesPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
