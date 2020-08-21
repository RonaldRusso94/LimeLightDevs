import PackageDeal from "./PackageDeal";
import { useState, useEffect } from "react";

// TODO get this from server
export const packageGroupsData = [
  {
    name: "Web Design",
    packages: [
      {
        title: "Basic Web Package",
        originalPrice: "299",
        price: "199",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, voluptates?",
        details: ["2 Stock Images", "3 Page Website"],
      },
      {
        title: "Startup Web Package",
        originalPrice: "596",
        price: "399",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, voluptates?",
        details: ["5 Stock Photos", "5 Page Website"],
      },
      {
        title: "Professional Web Package",
        originalPrice: "1308",
        price: "699",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, voluptates?",
        details: ["10 Stock Photos", "10 Page Website"],
      },
    ],
  },
  {
    name: "eCommerce Packages",
    packages: [
      {
        title: "Basic eCommerce Package",
        originalPrice: "299",
        price: "199",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, voluptates?",
        details: ["2 Stock Images", "3 Page Website"],
      },
      {
        title: "Startup eCommerce Package",
        originalPrice: "596",
        price: "399",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, voluptates?",
        details: ["5 Stock Photos", "5 Page Website"],
      },
      {
        title: "Professional eCommerce Package",
        originalPrice: "1308",
        price: "699",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, voluptates?",
        details: ["10 Stock Photos", "10 Page Website"],
      },
    ],
  },
];

const PackageGroupSelector = ({ activeGroup, setActiveGroup, groups }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {groups?.map((group) => (
        <button
          onClick={() => setActiveGroup(group)}
          className={`m-1 p-2 rounded border-2 ${
            group == activeGroup ? "bg-blue-500 text-white" : ""
          }`}
          key={group}
        >
          {group}
        </button>
      ))}
    </div>
  );
};

const Packages = () => {
  const [packageGroups] = useState(packageGroupsData);
  const [activeGroup, setActiveGroup] = useState("");
  const [visiblePackageGroup, setVisiblePackageGroup] = useState();

  useEffect(() => {
    setActiveGroup(packageGroups?.[0]?.name);
  }, [packageGroups]);

  useEffect(() => {
    setVisiblePackageGroup(
      packageGroups?.find((packageGroup) => packageGroup.name == activeGroup)
    );
  }, [activeGroup, packageGroups]);

  return (
    <div className="bg-gray-200 mt-16 p-4">
      <div>
        <h1 className="text-3xl font-bold">My Packages</h1>
        <p className="lg:w-10/12">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, porro
          exercitationem consequuntur velit quo nihil maxime, incidunt quibusdam
          libero quae sit? Nisi repudiandae dolor consectetur quisquam eaque
          harum excepturi expedita.
        </p>
      </div>

      <PackageGroupSelector
        {...{
          activeGroup,
          setActiveGroup,
          groups: packageGroups?.map((group) => group.name),
        }}
      />

      <div className="flex flex-wrap justify-center">
        {visiblePackageGroup?.packages.map((packageItem) => (
          <div key={packageItem.title} className="py-4 px-0 sm:px-4">
            <PackageDeal {...packageItem} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
