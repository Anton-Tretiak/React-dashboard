import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  border: 2px solid rgb(242, 210, 184);
  padding: 8px;
  border-radius: 4px;
  background-color: rgb(249, 230, 215);
`
export const Header = styled.h2`
  margin-top: 0;
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding-bottom: 9%;
  padding-top: 10%;
`
export const Info = styled.p`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: 8px;
  color: var(--color-primary-text);
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0.25px;
`
export const Icon = styled.i`
  display: block;
  margin-right: 8px;
  color: var(--color-secondary-text);

  svg{
    display: block;
    margin-right: 8px;
    color: var(--color-secondary-text);
  }
`