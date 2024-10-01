import { StyleSheet } from "react-native";
import React from "react";
import * as DropdownMenu from "zeego/dropdown-menu";
import RoundBtn from "./RoundBtn";

const Dropdown = () => {
  const DropdownMenuRoot = DropdownMenu.Root;
  const DropdownMenuTrigger = DropdownMenu.Trigger;
  const DropdownMenuContent = DropdownMenu.Content;
  return (
    <DropdownMenuRoot>
      <DropdownMenuTrigger>
        <RoundBtn icon={"ellipsis-horizontal"} text={"More"} />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        loop={true}
        side={"top"}
        align={"start"}
        alignOffset={0}
        avoidCollisions={true}
        collisionPadding={0}
        sideOffset={0}
      >
        <DropdownMenu.Item key="statement">
          <DropdownMenu.ItemTitle>Statement</DropdownMenu.ItemTitle>
          <DropdownMenu.ItemIcon
            ios={{
              name: "list.bullet.rectangle.fill",
              pointSize: 24,
            }}
          />
        </DropdownMenu.Item>
        <DropdownMenu.Item key="converter">
          <DropdownMenu.ItemTitle>Converter</DropdownMenu.ItemTitle>
          <DropdownMenu.ItemIcon
            ios={{
              name: "coloncurrencysign.arrow.circlepath",
              pointSize: 24,
            }}
          />
        </DropdownMenu.Item>
        <DropdownMenu.Item key="backround">
          <DropdownMenu.ItemTitle>Background</DropdownMenu.ItemTitle>
          <DropdownMenu.ItemIcon
            ios={{
              name: "photo.fill",
              pointSize: 24,
            }}
          />
        </DropdownMenu.Item>
        <DropdownMenu.Item key="account">
          <DropdownMenu.ItemTitle>Account</DropdownMenu.ItemTitle>
          <DropdownMenu.ItemIcon
            ios={{
              name: "arrow.right.square.fill",
              pointSize: 24,
            }}
          />
        </DropdownMenu.Item>
      </DropdownMenuContent>
    </DropdownMenuRoot>
  );
};

export default Dropdown;

const styles = StyleSheet.create({});
