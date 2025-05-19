"use client";

import { IProjectItem } from "@/types";
import ProjectItem from "./ProjectItem";
import Column from "@/components/core/Column";

const ProjectList = ({ projects }: Readonly<{ projects: IProjectItem[] }>) => {
  return (
    <Column classNames="w-full mt-16 gap-8">
      {projects.map((item, index) => {
        return <ProjectItem key={`project-item-${index}`} project={item} />;
      })}
    </Column>
  );
};

export default ProjectList;
