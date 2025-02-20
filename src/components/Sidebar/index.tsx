import { NAVBAR_ICONS, NAVBAR_EXIT_ICON } from "../../constants/NavbarIcons";
import { SidebarContainer } from "./styles";

export const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <nav>
        {Object.entries(NAVBAR_ICONS).map(([key, value]) => (
          <a href={value.ref}>
            {value.icon} {key}
          </a>
        ))}
      </nav>
      <div>
        {Object.entries(NAVBAR_EXIT_ICON).map(([key, value]) => (
          <a href={value.ref}>
            {value.icon} {key}
          </a>
        ))}
      </div>
    </SidebarContainer>
  );
};
