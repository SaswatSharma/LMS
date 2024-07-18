"use client";
import { HoverEffect } from "@/components/card-hover-effect";
import Chatbot from "@/components/ChatBot";
import { HeroHighlight } from "@/components/hero-highlight";
import { TypewriterEffectSmooth } from "@/components/typewriter-effect";
import Image from "next/image";
import { text } from "stream/consumers";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import ModalLoader from "@/components/ModalLoader";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const words = [
    {
      text: "Meet",
    },
    {
      text: "our",
    },
    {
      text: "AI",
    },
    {
      text: "librarian",
    },
    {
      text: "for",
    },
    {
      text: "instant",
    },
    {
      text: "help...",
    },
  ];
  const projects = [
    {
      id: 1,
      title: "Borrowed Books",
    },
    {
      id: 2,
      title: "Issue Books",
    },
    {
      id: 3,
      title: "My Profile",
    },
    // {
    //   title: "Meta",
    // },
    // {
    //   title: "Amazon",
    // },
    // {
    //   title: "Microsoft",
    // },
  ];
  const [selectedProject, setSelectedProject] = useState(1);
  return (
    <>
      <main className="flex size-full min-h-[100vh]">
        <div className="size-full flex">
          <HeroHighlight className="size-full">
            <div className="flex flex-col items-center justify-center h-[40rem] w-[60%] text-center ">
              <TypewriterEffectSmooth words={words} className="z-20" />
              <div className="max-w-5xl mx-auto z-50   px-8">
                <HoverEffect
                  items={projects}
                  onClick={(id: number) => {
                    console.log(id);
                    setSelectedProject(id);
                    onOpen();
                  }}
                />
              </div>
            </div>
          </HeroHighlight>
        </div>
        <div className="absolute bottom-0 right-0 z-50">
          <Chatbot />
        </div>

        <Modal size={"2xl"} isOpen={isOpen} onClose={onClose} className="p-2">
          <ModalContent>
            {(onClose) => (
              <>
                {/* <ModalHeader className="flex flex-col gap-1">
                  Modal Title
                </ModalHeader>
                <ModalBody>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>
                  <p>
                    Magna exercitation reprehenderit magna aute tempor cupidatat
                    consequat elit dolor adipisicing. Mollit dolor eiusmod sunt
                    ex incididunt cillum quis. Velit duis sit officia eiusmod
                    Lorem aliqua enim laboris do dolor eiusmod.
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Action
                  </Button>
                </ModalFooter> */}
                <ModalLoader id={selectedProject} item={projects} />
              </>
            )}
          </ModalContent>
        </Modal>
      </main>
    </>
  );
}
