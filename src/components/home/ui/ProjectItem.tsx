"use client";

import { RepoType, type IProjectItem } from "@/types";
import { Balancer } from "react-wrap-balancer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import Column from "@/components/core/Column";
import Row from "@/components/core/Row";
import CardBox from "@/components/core/CardBox";

const ProjectItem = ({ project }: { project: IProjectItem }) => {
  return (
    <CardBox classNames="w-full p-6 gap-8 items-center justify-between rounded-[var(--borderRadius)] border border-[rgba(255,255,255,0.10)] dark:bg-[var(--primaryColor5)] bg-[var(--primaryColor5)] shadow-[2px_4px_16px_0px_rgba(100,100,100,0.06)_inset] group slide_in">
      <Row classNames="w-full items-center justify-between flex-wrap gap-6">
        <Column classNames="flex-1 min-w-[250px] items-start justify-start">
          <Row classNames="items-center gap-4">
            <div className="w-[2.5rem] md:w-[3rem] aspect-square items-center justify-center flex">
              <Image
                src={project.icon}
                alt={`project-${project.title}`}
                width={100}
                height={100}
                sizes="100%"
                loading="lazy"
                placeholder="blur"
                blurDataURL={project.icon}
                className="w-full h-full object-cover aspect-square"
              />
            </div>

            <div>
              <p className="text-lg/6 font-semibold">{project.title}</p>

              <div
                className={`flex flex-row items-center justify-center rounded-full py-[0.05] px-[0.5rem] mt-1 capitalize text-center border ${
                  project.repoType === RepoType.Private
                    ? "text-[var(--errorColor)] border-[var(--errorColor50)]"
                    : "text-[var(--successColor)] border-[var(--successColor50)]"
                }`}
              >
                <p className="text-xs/6 font-semibold">
                  {project.repoType === RepoType.Private ? "Private" : "Public"}
                </p>
              </div>
            </div>
          </Row>

          <p className="mt-4">
            <Balancer>{project.description}</Balancer>
          </p>

          {project.tags && project.tags.length > 0 ? (
            <Row classNames="w-full items-center flex-wrap mt-4">
              {project.tags.map((tag, i) => {
                return (
                  <p
                    key={`tag-${i}`}
                    className="rounded-[var(--borderRadius)] border border-[var(--textColor50)] py-[.125rem] px-2 mr-2 mb-2 text-xs/6 font-normal"
                  >
                    {tag}
                  </p>
                );
              })}
            </Row>
          ) : null}
        </Column>

        <Row classNames="items-center justify-end gap-4 mt-4 sm:mt-0">
          {project.githubUrl ? (
            <Link
              href={project.githubUrl}
              aria-label={`${project.title} GitHub URL`}
              target="_blank"
              className="app__outlined_btn !rounded-[var(--borderRadius)] !py-2 !px-4 flex items-center gap-2 !border-[var(--textColor)] min-w-[8rem] justify-center transition-all hover:scale-105"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="text-base/6 text-[var(--textColor)]"
              />
              <span className="text-sm font-medium">View Code</span>
            </Link>
          ) : null}

          {project.url ? (
            <Link
              href={project.url}
              aria-label={`${project.title} Project URL`}
              target="_blank"
              className="app__outlined_btn !rounded-[var(--borderRadius)] !py-2 !px-4 flex items-center gap-2 !border-[var(--textColor)] min-w-[8rem] justify-center transition-all hover:scale-105"
            >
              <FontAwesomeIcon
                icon={faEye}
                className="text-base/6 text-[var(--textColor)]"
              />
              <span className="text-sm font-medium">Live Demo</span>
            </Link>
          ) : null}
        </Row>
      </Row>
    </CardBox>
  );
};

export default ProjectItem;
