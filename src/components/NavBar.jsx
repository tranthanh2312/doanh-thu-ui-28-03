import { useState } from "react";
import {
  IconGauge,
  IconFingerprint,
  IconActivity,
  IconChevronRight,
} from "@tabler/icons-react";
import { Box, NavLink, Modal } from "@mantine/core";
import useScreenSize from "../hooks/useScreenSize";

const data = [
  { icon: IconGauge, label: "Dashboard", description: "Item with description" },
  {
    icon: IconFingerprint,
    label: "Security",
    rightSection: <IconChevronRight size="1rem" stroke={1.5} />,
  },
  { icon: IconActivity, label: "Activity" },
];

export default function NavBar() {
  const [active, setActive] = useState(0);
  const screenSize = useScreenSize();

  const items = data.map((item, index) => (
    <div className="">
      <NavLink
        key={item.label}
        active={index === active}
        label={item.label}
        description={item.description}
        rightSection={item.rightSection}
        icon={<item.icon size="1rem" stroke={1.5} />}
        onClick={() => setActive(index)}
        style={{
          marginTop: index === 0 ? "5vh" : "0.5rem",
        }}
      />
    </div>
  ));

  return (
    <div style={{
      backgroundColor: screenSize.width < 992 ? "transparent" : "white", 
       }}>
      <div
        style={{
          backgroundColor: "white",
          display: screenSize.width < 992 ? "none" : "block",
          height: "100%" 
        }}
      >
        <Box w={220}>{items}</Box>
      </div>

      <div>

      </div>
    </div>
  );
}
