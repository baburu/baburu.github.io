import React from "react";
import Title from "./title";
import Footer from "./footer";
import research from "./data/research.json";

const Research = () => {
  return (
    <div>
      <Title
        title="Research Priority List"
        titleFontSize="24pt"
        subtitle="Top to Bottom - Higher to Lower Priority"
      />
      <div className="main-container">
        {research.map((researchItems, reserchItemsIndex) => {
          return (
            <div
              key={`row-${reserchItemsIndex}`}
              className="research-row row-break"
            >
              {researchItems.map((researchItem) => {
                return (
                  <div
                    className={`research rarity-${researchItem.rarity}`}
                    key={researchItem.key}
                  >
                    <div className="timer">{researchItem.timer}</div>
                    <div className="code">{researchItem.code}</div>
                    <div className="cost">
                      {researchItem.cost1 && (
                        <span className="cost-text">{researchItem.cost1}</span>
                      )}
                      <span className="cost-text2">{researchItem.cost2}</span>
                      {researchItem.cost1Resource && (
                        <img
                          className=""
                          src={require(`${researchItem.cost1Resource}`)}
                        />
                      )}
                      <img
                        className=""
                        src={require(`${researchItem.cost2Resource}`)}
                      />
                    </div>
                    <div className="tags">
                      {researchItem.tags.map((tag) => {
                        return (
                          <span key={tag.key} className={tag.class ?? ""}>
                            {tag.name}
                          </span>
                        );
                      })}
                    </div>
                    <div className="loot">
                      {researchItem.loot.map((lootItem) => {
                        return (
                          <img
                            key={lootItem.key}
                            className={lootItem.class ?? ""}
                            src={require(`${lootItem.type}`)}
                          />
                        );
                      })}
                    </div>
                    <div className={researchItem.typeClass}>
                      <img src={require(`${researchItem.type}`)} />
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
        <Footer disableSource={true} />
      </div>
    </div>
  );
};

export default Research;
