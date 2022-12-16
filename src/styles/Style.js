import styled from "styled-components";

export const StyledPageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    padding: 68px 36px;
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
        text-align: center;
        display: block;
        margin-top: 25px;
        font-size: 14px;
        line-height: 17.5px;
        color: #52B6FF;
        text-decoration: underline;
    }
`
export const StyledForm = styled.form`
    margin-top: 32px;
`
export const StyledInput = styled.input`
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    height: 45px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    margin-bottom: 6px;
    &::placeholder{
        font-size: 20px;
        height: 25px;
        color: #D4D4D4;
    }
`
export const StyledButton = styled.button`
    width: 100%;
    height: 45px;
    border: none;
    border-radius: 5px;
    background-color: #52B6FF;
    font-size: 21px;
    color: #FFFFFF;
    &:hover{
        cursor: pointer;
    }
`