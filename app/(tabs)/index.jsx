import { ScrollView } from "react-native";

import AppHeader from "../../components/appHeader";
import WelcomeCard from "../../components/welcomeCard";
import StudentDetails from "../../components/studentDetails";
import SurveyCountCard from "../../components/surveyCountCard";
import QuickActions from "../../components/QuickActions";
import RecentSurvey from "../../components/RecentSurvey";

export default function Dashboard() {
  return (
    <ScrollView>
      <AppHeader />
      <WelcomeCard />
      <StudentDetails />
      <SurveyCountCard />
      <QuickActions />
      <RecentSurvey />
    </ScrollView>
  );
}