
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Pivishka Udana",
    role: "Founder",
    bio: "Pivishka founded UDARA ANTIQUES with a vision to preserve history through beautiful objects.",
    image: "/images/team/udana.jpg"
  },
  {
    name: "Chamath Senarathna",
    role: "Official Photographer",
    bio: "Chamath brings 5 years of photography expertise, specializing in capturing the beauty of antique treasures.",
    image: "/images/team/chamath2.jpg"
  },
  {
    name: "Manuja Pinsara",
    role: "Website Developer",
    bio: "Manuja is a website developer with a passion for creating beautiful and functional websites.",
    image: "/images/team/manuja2.jpg"
  }
];

const Team = () => {
  return (
    <div className="py-12 bg-muted/30">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden hover-lift border-none shadow-md">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <h3 className="font-bold text-xl">{member.name}</h3>
                <p className="text-primary font-medium text-sm">{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
