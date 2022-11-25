import { shuffle } from "../../utils";

const fireWorksArr = [
    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" key="fw0">
        <circle cx="20" cy="20" r="20" />
    </svg>,
    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" key="fw1">
        <circle cx="20" cy="20" r="20" />
    </svg>,
    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" key="fw2">
        <circle cx="20" cy="20" r="20" />
    </svg>,
    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" key="fw3">
        <circle cx="20" cy="20" r="20" />
    </svg>,
    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" key="fw4">
        <circle cx="20" cy="20" r="20" />
    </svg>,
    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" key="fw5">
        <circle cx="20" cy="20" r="20" />
    </svg>,
    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" key="fw6">
        <circle cx="20" cy="20" r="20" />
    </svg>,
    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" key="fw7">
        <circle cx="20" cy="20" r="20" />
    </svg>,
    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" key="fw8">
        <circle cx="20" cy="20" r="20" />
    </svg>]

export const randomizeFireworks = (arr = fireWorksArr) => {
    return shuffle(arr);
}