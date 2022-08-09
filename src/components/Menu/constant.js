import {
  CheckCircleOutlined,
  BookOutlined,
  CalculatorOutlined,
  TeamOutlined,
  AppstoreAddOutlined,
  LeftCircleOutlined,
  UserOutlined, RedoOutlined,FileDoneOutlined
} from "@ant-design/icons";
// FileOutlined,MenuOutlined,ProfileOutlined,

const MenuItem = [
  { name: "Home", icon: <CalculatorOutlined /> },
  { name: "Employee", icon: <BookOutlined /> },
  { name: "Master", icon: <CheckCircleOutlined /> },
  { name: "Appraisal", icon: <AppstoreAddOutlined /> },
  { name: "Report", icon: <FileDoneOutlined />   },
];
const SuperItem = [
  { name: "Home", icon: <CalculatorOutlined /> },
  { name: "Employee", icon: <BookOutlined /> },
  { name: "Master", icon: <CheckCircleOutlined /> },
  { name: "Report", icon: <FileDoneOutlined />   },
];
const TlItem = [
  {
    name: "Profile",
    icon: <CheckCircleOutlined />,
    suboption: [
      { name: "My Appraisal", icon: <BookOutlined /> },
      { name: "My Profile", icon: <TeamOutlined /> },
    ],
  },
  {
    name: "Appraisal",
    icon: <BookOutlined />,
    suboption: [
      // { name: "Employee", icon: <ProfileOutlined /> },
      { name: "Add Appraisal", icon: <AppstoreAddOutlined /> },
    ],
  },
];
const EmpItem = [
  // { name: "My Profile", icon: <CheckCircleOutlined /> },
  { name: "Appraisal", icon: <AppstoreAddOutlined /> },
  { name: "Report", icon: <FileDoneOutlined />  },
];
const MobileMenu = [
  { name: "Profile", icon: <UserOutlined /> },
  { name: "Change Password", icon: <RedoOutlined /> },
  { name: "Log-out", icon: <LeftCircleOutlined /> },
];
export { MenuItem, TlItem, EmpItem, MobileMenu ,SuperItem};
