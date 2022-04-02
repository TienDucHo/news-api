import React from "react";
import Image from "next/image";
import styles from "../styles/NewsCard.module.scss";
import { useState } from "react";

function NewsCard({ news }) {
  const [isLoading, setLoading] = useState(true);
  let startIndex =
    news.content.search('<img src="') + '<img src="'.length;
  let endIndex = news.content.search('" ></a></br>');
  let imgUrl = news.content.substring(startIndex, endIndex);

  return startIndex == -1 || endIndex == -1 ? (
    <></>
  ) : (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={imgUrl}
          alt={news.title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
          className={isLoading ? styles.isLoading : ""}
          onLoadingComplete={() => setLoading(false)}
        ></Image>
      </div>
      <h2 className={styles.title}>{news.title}</h2>
      <h4 className={styles.author}>{news.author}</h4>
    </div>
  );
}

export default NewsCard;
