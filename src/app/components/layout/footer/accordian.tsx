import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';
import { FaAngleDown } from 'react-icons/fa6';
import Link from 'next/link';

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
            {data.map((eachGroup: any) => <Accordion key={eachGroup.id}>
                <AccordionSummary
                    expandIcon={<FaAngleDown />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    {eachGroup.group}
                </AccordionSummary>
                <AccordionDetails sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                    {eachGroup.navigations.map((eachNavigation: any) => <Link key={eachNavigation.id} href={eachNavigation.linkUrl}>
                        {eachNavigation.title}
                    </Link>)}
                </AccordionDetails>
            </Accordion>)
            }
        </div >
    );
}
