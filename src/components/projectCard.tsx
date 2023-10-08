// components/projectCard.tsx
import React from "react";
import { Stack, Text, Card, CardBody, Image, Heading } from "@chakra-ui/react";
import Category from "../interfaces/Category";
import Link from "next/link";
import { Project } from "@/types/Project";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <>
      <Card maxW="sm" height="25rem">
        {" "}
        {/* Set a fixed minHeight */}
        <CardBody>
          <Stack mt="6" spacing="3">
            <Link
              href="/projectoverview"
              style={{
                fontSize: "1.3rem",
                color: "blue",
                textDecoration: "underline",
              }}
              // href={`/category?cat=${encodeURIComponent(
              //   project.name.toLowerCase()
              // )}`}
            >
              {project.name}
            </Link>
            <Text>{project.about}</Text>
          </Stack>
        </CardBody>
      </Card>
      <br />
      <br />
    </>
  );
};

export default ProjectCard;
