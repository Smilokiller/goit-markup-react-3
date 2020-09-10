import React, { Component } from "react";
import axios from "axios";
import { Searchbar } from "./imagesComponents/Searchbar";
import { ImageGallery } from "./imagesComponents/ImageGallery";
import { Button } from "./imagesComponents/Button";
import Loader from "react-loader-spinner";
import styles from "./imagesComponents/styles.module.css";

axios.defaults.baseURL = "https://pixabay.com/api";

export class ImagesSearch extends Component {
  state = {
    imageList: [],
    keyWord: "",
    searchWord: "",
    page: 1,
    isLoading: false,
    isVisible: false,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.setState({ searchWord: this.state.keyWord }, this.drawImages);
    this.setState({ keyWord: "" });
    this.setState({ page: 1 });
  };

  drawImages = () => {
    this.setState({ isLoading: true });
    axios
      .get(
        `/?key=17937639-afdfa4080eb94060ee59a5ab1&q=${this.state.searchWord}&per_page=12&image_type=photo&page=${this.state.page}`
      )
      .then((data) => {
        if (this.state.page === 1) {
          this.setState({ imageList: data.data.hits });
        } else {
          this.setState({
            imageList: [...this.state.imageList, ...data.data.hits],
          });
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }
      })
      .finally(() => {
        this.setState({ isLoading: false });
        this.setState({ isVisible: true });
      });
  };

  handleClick = () => {
    this.setState((prevState) => {
      return { page: prevState.page + 1 };
    }, this.drawImages);
  };

  render() {
    const gallery = this.state.imageList;
    const isLoading = this.state.isLoading;
    const isVisible = this.state.isVisible;

    return (
      <>
        <div className={styles.cont}>
          <Searchbar
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            value={this.state.keyWord}
          />
          <ImageGallery gallery={gallery} toogleModal={this.toogleModal} />
          {isVisible && <Button onClick={this.handleClick} />}

          {isLoading && (
            <Loader
              type="Hearts"
              color="#00BFFF"
              height={80}
              width={80}
              timeout={3000}
            />
          )}
        </div>
      </>
    );
  }
}
