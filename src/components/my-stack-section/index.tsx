"use client"
import React from "react";


import AwsLogo from "@/assets/stacks/aws-logo.svg";
import DockerLogo from "@/assets/stacks/docker-logo.svg";
import GccLogo from "@/assets/stacks/gcc-logo.svg";
import GithubActionsLogo from "@/assets/stacks/githubactions-logo.svg";
import GolangLogo from "@/assets/stacks/golang-logo.svg";
import JavaLogo from "@/assets/stacks/java-logo.svg";
import JavaScriptLogo from "@/assets/stacks/javascript-logo.svg";
import KubernetesLogo from "@/assets/stacks/kubernetes-logo.svg";
import MongoDbLogo from "@/assets/stacks/mongodb-logo.svg";
import MysqlLogo from "@/assets/stacks/mysql-logo.svg";
import NextJsLogo from "@/assets/stacks/nextjs-logo.svg";
import ReactNativeLogo from "@/assets/stacks/reactnative-logo.svg";
import SpringBootLogo from "@/assets/stacks/springboot-logo.svg";
import TypescriptLogo from "@/assets/stacks/typescript-logo.svg";


import { ImageProps } from "next/image";
import { StackComponent } from "../stack-component";
import { motion } from "motion/react"

export function StacksCarousel() {
    const stacks: { image: ImageProps; title: string }[] = [
      { image: AwsLogo, title: "AWS" },
      { image: DockerLogo, title: "Docker" },
      { image: GccLogo, title: "GCC" },
      { image: GithubActionsLogo, title: "Github Actions" },
      { image: GolangLogo, title: "Golang" },
      { image: JavaLogo, title: "Java" },
      { image: JavaScriptLogo, title: "JavaScript" },
      { image: KubernetesLogo, title: "Kubernetes" },
      { image: MongoDbLogo, title: "MongoDB" },
      { image: MysqlLogo, title: "MySQL" },
      { image: NextJsLogo, title: "Next.js" },
      { image: ReactNativeLogo, title: "React Native" },
      { image: SpringBootLogo, title: "Spring Boot" },
      { image: TypescriptLogo, title: "Typescript" },
      { image: AwsLogo, title: "AWS" },
      { image: DockerLogo, title: "Docker" },
      { image: GccLogo, title: "GCC" },
      { image: GithubActionsLogo, title: "Github Actions" },
      { image: GolangLogo, title: "Golang" },
      { image: JavaLogo, title: "Java" },
      { image: JavaScriptLogo, title: "JavaScript" },
      { image: KubernetesLogo, title: "Kubernetes" },
      { image: MongoDbLogo, title: "MongoDB" },
      { image: MysqlLogo, title: "MySQL" },
      { image: NextJsLogo, title: "Next.js" },
      { image: ReactNativeLogo, title: "React Native" },
      { image: SpringBootLogo, title: "Spring Boot" },
      { image: TypescriptLogo, title: "Typescript" },
      { image: AwsLogo, title: "AWS" },
      { image: DockerLogo, title: "Docker" },
      { image: GccLogo, title: "GCC" },
      { image: GithubActionsLogo, title: "Github Actions" },
      { image: GolangLogo, title: "Golang" },
      { image: JavaLogo, title: "Java" },
      { image: JavaScriptLogo, title: "JavaScript" },
      { image: KubernetesLogo, title: "Kubernetes" },
      { image: MongoDbLogo, title: "MongoDB" },
      { image: MysqlLogo, title: "MySQL" },
      { image: NextJsLogo, title: "Next.js" },
      { image: ReactNativeLogo, title: "React Native" },
      { image: SpringBootLogo, title: "Spring Boot" },
      { image: TypescriptLogo, title: "Typescript" },
      { image: AwsLogo, title: "AWS" },
      { image: DockerLogo, title: "Docker" },
      { image: GccLogo, title: "GCC" },
      { image: GithubActionsLogo, title: "Github Actions" },
      { image: GolangLogo, title: "Golang" },
      { image: JavaLogo, title: "Java" },
      { image: JavaScriptLogo, title: "JavaScript" },
      { image: KubernetesLogo, title: "Kubernetes" },
      { image: MongoDbLogo, title: "MongoDB" },
      { image: MysqlLogo, title: "MySQL" },
      { image: NextJsLogo, title: "Next.js" },
      { image: ReactNativeLogo, title: "React Native" },
      { image: SpringBootLogo, title: "Spring Boot" },
      { image: TypescriptLogo, title: "Typescript" },
      { image: AwsLogo, title: "AWS" },
      { image: DockerLogo, title: "Docker" },
      { image: GccLogo, title: "GCC" },
      { image: GithubActionsLogo, title: "Github Actions" },
      { image: GolangLogo, title: "Golang" },
      { image: JavaLogo, title: "Java" },
      { image: JavaScriptLogo, title: "JavaScript" },
      { image: KubernetesLogo, title: "Kubernetes" },
      { image: MongoDbLogo, title: "MongoDB" },
      { image: MysqlLogo, title: "MySQL" },
      { image: NextJsLogo, title: "Next.js" },
      { image: ReactNativeLogo, title: "React Native" },
      { image: SpringBootLogo, title: "Spring Boot" },
      { image: TypescriptLogo, title: "Typescript" },
      { image: AwsLogo, title: "AWS" },
      { image: DockerLogo, title: "Docker" },
      { image: GccLogo, title: "GCC" },
      { image: GithubActionsLogo, title: "Github Actions" },
      { image: GolangLogo, title: "Golang" },
      { image: JavaLogo, title: "Java" },
      { image: JavaScriptLogo, title: "JavaScript" },
      { image: KubernetesLogo, title: "Kubernetes" },
      { image: MongoDbLogo, title: "MongoDB" },
      { image: MysqlLogo, title: "MySQL" },
      { image: NextJsLogo, title: "Next.js" },
      { image: ReactNativeLogo, title: "React Native" },
      { image: SpringBootLogo, title: "Spring Boot" },
      { image: TypescriptLogo, title: "Typescript" },
      { image: AwsLogo, title: "AWS" },
      { image: DockerLogo, title: "Docker" },
      { image: GccLogo, title: "GCC" },
      { image: GithubActionsLogo, title: "Github Actions" },
      { image: GolangLogo, title: "Golang" },
      { image: JavaLogo, title: "Java" },
      { image: JavaScriptLogo, title: "JavaScript" },
      { image: KubernetesLogo, title: "Kubernetes" },
      { image: MongoDbLogo, title: "MongoDB" },
      { image: MysqlLogo, title: "MySQL" },
      { image: NextJsLogo, title: "Next.js" },
      { image: ReactNativeLogo, title: "React Native" },
      { image: SpringBootLogo, title: "Spring Boot" },
      { image: TypescriptLogo, title: "Typescript" },
      { image: AwsLogo, title: "AWS" },
      { image: DockerLogo, title: "Docker" },
      { image: GccLogo, title: "GCC" },
      { image: GithubActionsLogo, title: "Github Actions" },
      { image: GolangLogo, title: "Golang" },
      { image: JavaLogo, title: "Java" },
      { image: JavaScriptLogo, title: "JavaScript" },
      { image: KubernetesLogo, title: "Kubernetes" },
      { image: MongoDbLogo, title: "MongoDB" },
      { image: MysqlLogo, title: "MySQL" },
      { image: NextJsLogo, title: "Next.js" },
      { image: ReactNativeLogo, title: "React Native" },
      { image: SpringBootLogo, title: "Spring Boot" },
      { image: TypescriptLogo, title: "Typescript" },
      { image: AwsLogo, title: "AWS" },
      { image: DockerLogo, title: "Docker" },
      { image: GccLogo, title: "GCC" },
      { image: GithubActionsLogo, title: "Github Actions" },
      { image: GolangLogo, title: "Golang" },
      { image: JavaLogo, title: "Java" },
      { image: JavaScriptLogo, title: "JavaScript" },
      { image: KubernetesLogo, title: "Kubernetes" },
      { image: MongoDbLogo, title: "MongoDB" },
      { image: MysqlLogo, title: "MySQL" },
      { image: NextJsLogo, title: "Next.js" },
      { image: ReactNativeLogo, title: "React Native" },
      { image: SpringBootLogo, title: "Spring Boot" },
      { image: TypescriptLogo, title: "Typescript" },

    ];
  
    return (
      <div className="relative overflow-hidden ">
        <motion.div
          className="flex space-x-8"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 120,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* Primeiro conjunto de itens */}
          {stacks.map((stack, index) => (
            <StackComponent
              image={stack.image}
              title={stack.title}
              key={`stack-1-${index}`}
            />
          ))}
  
          {/* Segundo conjunto de itens para criar o loop */}
          {stacks.map((stack, index) => (
            <StackComponent
              image={stack.image}
              title={stack.title}
              key={`stack-2-${index}`}
            />
          ))}
        </motion.div>
      </div>
    );
  }