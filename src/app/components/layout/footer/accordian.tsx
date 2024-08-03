"use client";
import * as React from "react";
import { FaAngleDown } from "react-icons/fa6";
import Link from "next/link";
import Accordion from "../../surfaces/Accordion";

interface NavigationItem {
  id: string;
  title: string;
  linkUrl: string;
}

interface DataProps {
  data: {
    id: string;
    group: string;
    navigations: NavigationItem[];
  }[];
}

export default function FooterAccordian({ data }: DataProps) {
  return (
    <div>
      {data.map((eachGroup: any) => (
        <Accordion key={eachGroup.id} color="secondary" variant="underlined">
          <Accordion.Header>{eachGroup.group}</Accordion.Header>
          <Accordion.Body>
            <div className="flex flex-col gap-3 text-sm">
              {eachGroup.navigations.map((eachNavigation: any) => (
                <Link key={eachNavigation.id} href={eachNavigation.linkUrl}>
                  {eachNavigation.title}
                </Link>
              ))}
            </div>
          </Accordion.Body>
        </Accordion>
      ))}
    </div>
  );
}
