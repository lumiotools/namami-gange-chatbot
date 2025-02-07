import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function InfoSection() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Key Achievements of Namami Gange Programme</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Sewerage Treatment Capacity</AccordionTrigger>
            <AccordionContent>
              200 sewerage infrastructure projects sanctioned at a total cost of Rs. 31,810 Crore. 116 projects
              completed and operational, with remaining projects under various stages of implementation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>River-Front Development</AccordionTrigger>
            <AccordionContent>
              84 Ghats/Crematoria projects sanctioned for construction, modernization, and renovation of 286
              Ghats/Crematoria and Kunds/Ponds.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Bio-Diversity Conservation</AccordionTrigger>
            <AccordionContent>
              Projects to develop science-based aquatic species restoration plans, involving multiple stakeholders for
              conservation & restoration of aquatic biodiversity. Includes efforts by WII, CIFRI, and UP State Forest
              Department for species like Hilsa, Indian Major Carps, Mahseer, turtles, and Gharials.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Afforestation</AccordionTrigger>
            <AccordionContent>
              Forestry interventions planned for 1,34,106 hectares in five Ganga river bank states at an estimated cost
              of Rs. 2293.73 Crores. Includes natural landscape, agriculture landscape, urban landscape, and
              conservation interventions to improve river flow and conservation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Industrial Effluent Monitoring</AccordionTrigger>
            <AccordionContent>
              Regular inspections of 1072 Grossly Polluting Industries (GPIs) for compliance verification. Out of 961
              GPIs inspected in 2018, 636 are complying, 110 are non-complying, and 215 are self-closed. Online
              Continuous Effluent Monitoring Stations (OCEMS) established in 885 GPIs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Public Awareness</AccordionTrigger>
            <AccordionContent>
              Organized events, workshops, seminars, rallies, campaigns, exhibitions, and cleanliness drives. Utilized
              mass media including TV/Radio, print media, and social media platforms for wider publicity. Released Ganga
              Theme song to enhance programme visibility.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>Ganga Gram</AccordionTrigger>
            <AccordionContent>
              Identified 1674 Gram Panchayats along the Ganga in 5 states. Rs. 578 Crores released for toilet
              construction, with 8,53,397 toilets completed out of 15,27,105 targeted units. 65 villages adopted by 13
              IITs to develop as model villages.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}

