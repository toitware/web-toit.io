import styled from "@emotion/styled";
import * as React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import AboutSvg from "../../assets/images/submenu-icons/about.inline.svg";
import ApiSvg from "../../assets/images/submenu-icons/api.inline.svg";
import BlogSvg from "../../assets/images/submenu-icons/blog.inline.svg";
import CloudSvg from "../../assets/images/submenu-icons/cloud.inline.svg";
import CodeSvg from "../../assets/images/submenu-icons/code.inline.svg";
import CommunicationSvg from "../../assets/images/submenu-icons/communication.inline.svg";
import DeviceSvg from "../../assets/images/submenu-icons/device.inline.svg";
import DocumentSvg from "../../assets/images/submenu-icons/document.inline.svg";
import FaqSvg from "../../assets/images/submenu-icons/faq.inline.svg";
import PackagesSvg from "../../assets/images/submenu-icons/packages.inline.svg";
import menu from "../../content/menu.yaml";
import { white } from "../../theme";
import Submenu from "./Submenu";
import SubmenuItem from "./SubmenuItem";

const Wrapper = styled.div`
  position: absolute;
  background: white;
  top: 4.5rem;
  left: 0;
  width: 100%;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  background: ${white.string()};
  transition: all var(--menuFadeSpeed) linear;
`;

type SubmenuContainerProps = {
  visibleSubmenu?: string;
  isVisible: boolean;
};

/// It's not the most elegant way of doing it, but I couldn't find another
/// solution.
const iconMap: {
  [key: string]: JSX.Element;
} = {
  "device software": <CodeSvg />,
  "fleet management": <CloudSvg />,
  "supported hardware": <DeviceSvg />,
  "connectivity options": <CommunicationSvg />,
  documentation: <DocumentSvg />,
  api: <ApiSvg />,
  about: <AboutSvg />,
  blog: <BlogSvg />,
  faq: <FaqSvg />,
  "package registry": <PackagesSvg />,
};

export const SubmenuContainer: React.FC<SubmenuContainerProps> = ({ visibleSubmenu, isVisible }) => {
  // We're building a list of refs here, that we're going to assign later for
  // each submenu we're building.
  //
  // We need this to calculate the height of each section, so the backdrop can
  // adjust when the content changes.
  const refMapping = new Map<string, React.RefObject<HTMLDivElement>>(
    menu.items.map((item) => [item.title, useRef<HTMLDivElement>(null)])
  );

  const [submenuBackgroundHeight, setSubmenuBackgroundHeight] = useState(0);

  const updateBackgdropHeight = useCallback(() => {
    if (visibleSubmenu != null && isVisible) {
      // We've just built the map above, so we know it must contain the submenu.
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const visibleSubmenuElement = refMapping.get(visibleSubmenu)!.current;
      if (visibleSubmenuElement) {
        setSubmenuBackgroundHeight(visibleSubmenuElement.offsetHeight);
      }
    } else {
      setSubmenuBackgroundHeight(0);
    }
  }, [isVisible, visibleSubmenu]);

  useEffect(() => {
    updateBackgdropHeight();
  }, [updateBackgdropHeight, visibleSubmenu, isVisible]);

  useEffect(() => {
    window.addEventListener("resize", updateBackgdropHeight);
    return () => window.removeEventListener("resize", updateBackgdropHeight);
  }, [updateBackgdropHeight]);

  return (
    <Wrapper>
      <Backdrop style={{ height: `${submenuBackgroundHeight}px`, opacity: isVisible ? 1 : 0 }}></Backdrop>
      {menu.items.map((menuItem) => {
        if (menuItem.subpages) {
          return (
            <Submenu
              key={menuItem.title}
              title={menuItem.title}
              description={menuItem.description || ""}
              ref={refMapping.get(menuItem.title)}
              isVisible={visibleSubmenu == menuItem.title}
            >
              {menuItem.subpages.map((subPage) => (
                <SubmenuItem
                  key={subPage.title}
                  to={subPage.path && `${menuItem.path ?? ""}${subPage.path}`}
                  href={subPage.href}
                  title={subPage.title}
                  description={subPage.description || ""}
                  icon={iconMap[subPage.title.toLowerCase()]}
                />
              ))}
            </Submenu>
          );
        }
      })}
    </Wrapper>
  );
};

export default SubmenuContainer;
