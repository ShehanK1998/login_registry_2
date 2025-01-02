import Footer from "@/components/Footer";
import Header2 from "@/components/Header2";
import React from "react";

const Explore = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-400">
      <Header2 />
      <main className="flex-grow p-4">
        <h1 className="text-center text-4xl font-bold mb-4">Explore Sri Lanka</h1>

        {/* 4 Image Cards for the corners */}
        <div className="absolute top-30 left-10">
          <img
            src="/images/card1.jpg" // Replace with the path to your image card
            alt="Card 1"
            className="w-80 h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="absolute top-30 right-10">
          <img
            src="/images/card2.jpeg" // Replace with the path to your image card
            alt="Card 2"
            className="w-80 h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="absolute bottom-0 left-10">
          <img
            src="/images/card3.webp" // Replace with the path to your image card
            alt="Card 3"
            className="w-80 h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="absolute bottom-0 right-10">
          <img
            src="/images/card4.jpg" // Replace with the path to your image card
            alt="Card 4"
            className="w-80 h-80 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Image Map with clickable areas */}
        <div className="flex justify-center">
          <img
            src="/images/map.png" // Replace with your map image path
            alt="Sri Lanka Map"
            useMap="#exploreMap"
            className="max-w-full h-auto"
          />
          
          <map name="exploreMap">
            {/* Define clickable areas */}
            <area
              shape="poly"
              coords="234,33,243,25,254,24,265,22,272,24,280,21,292,21,297,25,302,31,305,37,308,42,304,48,299,54,296,59,282,57,279,61,271,60,260,56,253,54,244,50,238,46" 
              alt="Jaffna"
              href="/jaffna"
              title="Jaffna"
            />
            <area
              shape="poly"
              coords="272,133,271,122,266,114,260,110,261,99,272,96,281,90,278,76,267,68,259,63,275,69,284,70,293,77,300,82,307,87,318,81,298,62,304,50,330,67,329,76,338,82,349,88,358,91,354,99,353,104,346,100,340,107,327,107,321,109,298,109,293,113,291,121,287,128,281,131"
              alt="Kilinochchi"
              href="/kilinochchi"
              title="Kilinochchi"
            />
            <area
              shape="poly"
              coords="284,179,283,172,290,161,290,147,285,140,285,129,292,115,305,110,318,112,329,110,338,109,343,102,352,104,358,94,364,89,374,97,381,104,388,113,395,120,401,131,403,141,406,149,410,156,414,162,410,165,411,174,405,180,391,183,390,172,381,167,375,167,374,161,367,159,364,153,358,150,351,152,347,156,342,155,336,154,327,152,321,153,321,159,325,168,321,173,313,176,306,179,297,179"
              alt="Mulative"
              href="/mulative"
              title="Mulative"
            />
            <area
              shape="poly"
              coords="224,544,220,554,224,560,225,567,228,576,231,582,239,581,247,581,255,573,264,573,274,573,286,569,283,562,288,555,288,543,277,544,270,547,267,553,261,555,253,550,245,550,238,549,230,548"
              alt="Colombo"
              href="/colombo"
              title="Colombo"
            />
            <area
              shape="poly"
              coords="247,645,250,655,253,667,254,674,258,681,261,690,268,697,272,705,281,710,288,713,294,719,303,722,317,725,323,715,323,707,319,695,321,683,329,674,322,665,335,668,335,657,331,648,319,643,307,650,304,658,298,660,293,654,288,656,282,657,273,657,267,652,259,648"
              alt="Galle"
              href="/galle"
              title="Galle"
            />
            <area
              shape="poly"
              coords="320,730,326,727,328,734,339,734,350,734,358,734,367,733,376,730,377,719,372,714,374,705,375,695,371,695,369,689,361,684,364,676,368,669,371,660,366,655,361,655,361,648,354,648,347,648,343,651,337,657,341,665,336,668,322,662,328,668,331,676,328,681,323,681,323,687,320,694,323,700,328,704,323,713,326,719,320,722"
              alt="Matar"
              href="/matara"
              title="Matara"
            />
          </map>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Explore;

