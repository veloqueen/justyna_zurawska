import { Box, Typography } from "@mui/material";
import Image1 from "../assets/image11.jpg";
import Image2 from "../assets/image2.jpg";
import Image3 from "../assets/image3.jpeg";
import Image4 from "../assets/image4.avif";
import Image5 from "../assets/image5.jpg";
import styled from "styled-components";
import { theme } from "../utils/theme";

const TextContainer = styled("div")({
  display: "block",
  unicodeBidi: "isolate",
  backgroundColor: theme.palette.tertiary.main,
  color: theme.palette.primary.main,
  padding: "5% 10%",
});

const Body = () => {
  return (
    <div
      style={{
        display: "block",
        unicodeBidi: "isolate",
        background: theme.palette.primary.main,
      }}
    >
      <Box
        sx={{
          position: "relative",
          backgroundAttachment: "fixed",
          backgroundPositionX: "center",
          backgroundPositionY: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "100vh",
          backgroundImage: `url(${Image1})`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "common.white",
            padding: "0.5rem 1rem",
            fontWeight: "bold",
          }}
        >
          Decision Facilitator
        </Typography>
        <Typography
          variant="h1"
          sx={{
            color: "common.white",
            padding: "0.5rem 1rem",
            fontWeight: "bold",
          }}
        >
          Justyna Zurawska
        </Typography>

        <Typography
          variant="h2"
          sx={{
            color: "common.white",
            padding: "0.5rem 1rem",
          }}
          fontStyle="italic"
        >
          Making hard decisions easy
        </Typography>
      </Box>
      <TextContainer
        id="#welcome"
        style={{
          backgroundColor: theme.palette.secondary.main,
        }}
      >
        <Typography variant="h4" textAlign="center" mb="4%">
          Welcome
        </Typography>
        <Typography
          variant="h5"
          sx={{
            whiteSpace: "pre-wrap",
          }}
        >
          {"\n"}
          {"\n"}❥ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          lacinia dolor sem, nec vehicula enim mollis at. Vivamus eget hendrerit
          quam, non faucibus massa. Maecenas molestie pharetra tristique.
          Vivamus congue purus sit amet scelerisque tempus. Nunc sit amet quam
          fermentum, suscipit massa id, mattis tortor. Donec placerat urna eu
          arcu facilisis hendrerit. Vestibulum porttitor nunc vitae felis
          rhoncus rutrum.
          {"\n"}❥ Proin ut nibh in risus maximus aliquam nec et urna. Donec
          vestibulum eleifend tristique. Donec imperdiet aliquet diam at
          eleifend. Etiam fringilla, lorem eu euismod mollis, mauris elit
          imperdiet ligula, et mollis arcu ipsum maximus justo. Nulla ac
          vehicula elit, non pellentesque erat. Mauris molestie, leo sed
          accumsan aliquet, lectus velit tempor tellus, in pulvinar nisi lorem
          eget mi.
          {"\n"}❥ Maecenas feugiat feugiat neque molestie blandit. Curabitur
          rhoncus volutpat ligula vel luctus. Suspendisse eu tincidunt tortor,
          in eleifend ex. Praesent quis imperdiet massa, a varius ex. Vivamus
          quis venenatis augue. Proin at nisl vitae est fermentum pharetra et
          quis elit. Proin fringilla turpis aliquet euismod varius. Mauris
          tempus fermentum diam ac molestie. In hac habitasse platea dictumst.
        </Typography>
      </TextContainer>
      <div
        style={{
          position: "relative",
          backgroundAttachment: "fixed",
          backgroundPositionX: "center",
          backgroundPositionY: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "100vh",
          backgroundImage: `url(${Image2})`,
        }}
      />
      <TextContainer id="#whoamI">
        <Typography variant="h4" textAlign="center" mb="4%">
          Who am I?
        </Typography>
        <Typography
          variant="h5"
          lineHeight="2rem"
          sx={{
            whiteSpace: "pre-wrap",
          }}
        >
          ★ Curabitur nulla metus, porta ac tincidunt in, hendrerit quis magna.
          Nullam elementum sapien eget odio fringilla posuere. Donec laoreet
          feugiat odio a hendrerit. Fusce ornare nunc fringilla tortor tristique
          tristique. Aenean semper lobortis eros sed consequat. Donec volutpat
          orci eu hendrerit elementum. Curabitur varius vehicula mattis.
          {"\n"}★ Nullam semper tristique consequat. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Vivamus ultrices euismod tortor, quis egestas nisl elementum ac. Nunc
          consequat molestie tempor. Maecenas at mi urna. Nullam facilisis purus
          at pellentesque iaculis. Phasellus dapibus orci dolor, sed ultricies
          ante auctor vitae. Phasellus euismod ex nec lacus placerat, ut
          pellentesque enim lacinia.
        </Typography>
      </TextContainer>
      <div
        style={{
          position: "relative",
          backgroundAttachment: "fixed",
          backgroundPositionX: "center",
          backgroundPositionY: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "100vh",
          backgroundImage: `url(${Image3})`,
          backgroundColor: theme.palette.primary.main,
        }}
      />
      <TextContainer
        id="#recommendations"
        style={{
          backgroundColor: theme.palette.secondary.main,
        }}
      >
        <Typography variant="h4" textAlign="center" mb="4%">
          Recommendations
        </Typography>
        <Typography
          variant="h5"
          lineHeight="2rem"
          sx={{
            whiteSpace: "pre-wrap",
          }}
          textAlign="center"
        >
          Nulla lacus augue, consectetur sed vestibulum sed, elementum in nisi.
          Quisque sed gravida ex. Ut ultrices ligula eu arcu eleifend, eu
          dapibus purus mattis. Fusce fermentum a ligula quis malesuada. Nam
          ullamcorper vitae metus non scelerisque. Vivamus rutrum erat in urna
          aliquam laoreet. Suspendisse potenti. Duis tempor, diam in auctor
          fringilla, lacus erat ornare enim, ut convallis elit leo ut diam.
          Nulla dictum purus ante, non finibus sapien viverra vel.
          {"\n"}
          {"\n"}︵‿︵‿୨♡୧‿︵‿︵{"\n"}
          {"\n"}Cras convallis quam justo, ac ullamcorper orci cursus at.
          Integer placerat aliquet nibh eu congue. Donec commodo molestie
          tellus, hendrerit mattis mauris dictum ac. Mauris pharetra nisl eu
          tincidunt lacinia. Vivamus in sapien justo. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          {"\n"}
          {"\n"}»--•--«{"\n"}
          {"\n"}Morbi luctus, nisi et rhoncus pretium, ante risus sodales erat,
          tincidunt bibendum justo tortor vitae mauris. Aliquam sagittis ante et
          ornare consequat. Aenean malesuada imperdiet egestas. Donec ultrices
          libero ac nunc sagittis, in sollicitudin nulla ultricies. Fusce
          dignissim ultrices bibendum. Cras sit amet viverra quam, in molestie
          felis. Donec quis nisi consequat, molestie turpis id, dignissim
          sapien. Integer malesuada mauris vel mauris eleifend, nec molestie
          ipsum congue.
          {"\n"}
          {"\n"}»--•--«{"\n"}
          {"\n"}I also explored the idea of being treated like royalty. Just
          picture it: people doing everything to make you feel special and
          adored. It is all about the grand gestures and being pampered. There
          is something fun about embracing that kind of attention and just
          enjoying the moment.
          {"\n"}
          {"\n"}»--•--«{"\n"}
          {"\n"}Cras placerat libero sagittis neque mattis, eget volutpat orci
          auctor. Mauris fringilla tempor ipsum vel pretium. Sed scelerisque
          lectus id tellus sodales dapibus. Nullam eget malesuada nisl. Ut
          sodales tempus erat vel finibus. Phasellus accumsan nibh urna, in
          fringilla lacus facilisis ac. Maecenas sodales gravida dolor tincidunt
          condimentum. Vestibulum interdum diam vel magna ultrices luctus.
          {"\n"}
          {"\n"}»--•--«{"\n"}
          {"\n"}Cras laoreet, sem a vestibulum dapibus, libero lectus fermentum
          lacus, sed condimentum quam felis sit amet nisi. Nulla vestibulum
          tortor ac sapien ultrices euismod. Pellentesque ut convallis erat. Sed
          et nunc eget orci maximus semper. Mauris vitae velit id neque dictum
          aliquet nec at elit. Pellentesque ac efficitur magna. Phasellus eu
          urna mi. Phasellus faucibus dui nec sapien elementum pellentesque.
        </Typography>
      </TextContainer>
      <div
        style={{
          position: "relative",
          backgroundAttachment: "fixed",
          backgroundPositionX: "center",
          backgroundPositionY: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "100vh",
          backgroundImage: `url(${Image4})`,
          backgroundColor: theme.palette.primary.main,
        }}
      />
      <TextContainer id="#whoareyou">
        <Typography variant="h4" textAlign="center" mb="4%">
          Who are you?
        </Typography>
        <Typography
          variant="h5"
          lineHeight="2rem"
          sx={{
            whiteSpace: "pre-wrap",
          }}
        >
          ★ Curabitur nulla metus, porta ac tincidunt in, hendrerit quis magna.
          Nullam elementum sapien eget odio fringilla posuere. Donec laoreet
          feugiat odio a hendrerit. Fusce ornare nunc fringilla tortor tristique
          tristique. Aenean semper lobortis eros sed consequat. Donec volutpat
          orci eu hendrerit elementum. Curabitur varius vehicula mattis.
          {"\n"}★ Nullam semper tristique consequat. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Vivamus ultrices euismod tortor, quis egestas nisl elementum ac. Nunc
          consequat molestie tempor. Maecenas at mi urna. Nullam facilisis purus
          at pellentesque iaculis. Phasellus dapibus orci dolor, sed ultricies
          ante auctor vitae. Phasellus euismod ex nec lacus placerat, ut
          pellentesque enim lacinia.
        </Typography>
      </TextContainer>
      <div
        style={{
          position: "relative",
          backgroundAttachment: "fixed",
          backgroundPositionX: "center",
          backgroundPositionY: "top",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          backgroundImage: `url(${Image5})`,
        }}
      />
      <TextContainer
        id="#contact"
        style={{
          backgroundColor: theme.palette.secondary.main,
        }}
      >
        <Typography variant="h4" textAlign="center" mb="4%">
          Contact
        </Typography>
        <Typography
          variant="h5"
          textAlign="center"
          lineHeight="2rem"
          fontStyle="italic"
          mb="3%"
        >
          Do you want to take the first step?
        </Typography>
        <Typography
          variant="h5"
          lineHeight="2rem"
          sx={{
            whiteSpace: "pre-wrap",
          }}
        >
          Duis tempor, diam in auctor fringilla, lacus erat ornare enim, ut
          convallis elit leo ut diam. Nulla dictum purus ante, non finibus
          sapien viverra vel. Duis aliquet sapien sed luctus convallis. Praesent
          id vehicula magna. Donec faucibus bibendum nibh, at consectetur arcu
          porta at. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae;
          {"\n"}
          {"\n"}
        </Typography>
        <Typography
          variant="h5"
          lineHeight="2rem"
          sx={{
            overflowWrap: "break-word",
            wordWWrap: "break-word",
          }}
        >
          ⌨ Email: coaching@justynazurawska.com
        </Typography>
      </TextContainer>
      <Typography
        variant="h5"
        textAlign="center"
        py="2%"
        sx={{
          background: theme.palette.tertiary.main,
          color: theme.palette.primary.main,
        }}
      >
        {new Date().getFullYear()} Copyrights © Justyna Zurawska
      </Typography>
    </div>
  );
};

export default Body;
