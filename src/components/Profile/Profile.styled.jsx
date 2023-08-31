import styled from '@emotion/styled';

export const UserProfile = styled.div `
    display: flex;
    flex-direction: column;
    aligh-items: center;
    margin: 50px auto 50px;
    padding-top: 32px;
    width: 300px;
    background-color: white;
    border-radius: 3px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;

export const ProfileContainer = styled.div `
    margin: 0 auto;
    text-align: center;
    padding-bottom: 32px;
`;

export const ProfileAvatar = styled.img `
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 10px;
`;

export const Username = styled.p `
    font-size: 24px;
    font-weight: bold;
    padding: 0;
    margin-bottom: 8px;
    color: #2e2f42;
`;

export const Tag = styled.p `
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 8px;
    color: #999999;
`;

export const Location = styled.p `
    color: #999999;
`;

export const Stats = styled.ul `
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 20px;
    gap: 10px;
    border-top: 1px solid gray;
    background-color: #f4f4fd;
    list-style: none;
`;

export const Item = styled.li `
    text-align: center;
`;

export const Label = styled.span `
    display: flex;
    margin-bottom: 4px;
    color: #999999;
`;

export const Quantity = styled.span `
    font-size: 16px;
    font-weight: bold;
    color: #2e2f42;
`;