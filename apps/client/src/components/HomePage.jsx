import myVideo from "../assets/Untitled design.mp4";
import myVideotwo from "../assets/zara.mp4";
export const HomePage = () => {
  return (
    <div>
      <img
        className="homepagePicture"
        src="https://attachment.outlook.live.net/owa/MSA%3A89ec2e0329db0a5fb7c297de59729e7ce34a87b78eaa36ca318caf84feb60e76%40shadow.outlook.com/service.svc/s/GetAttachmentThumbnail?id=AQMkAGM4YzkwMAItOTkANTEtNmM5ZC0wMAItMDAKAEYAAAOw2HxZbIM%2BQ7BQBspkUWGbBwBx1nU%2Fl4%2BHTK1aAusnDp21AAACAQwAAABx1nU%2Fl4%2BHTK1aAusnDp21AAAAaBF%2F0AAAAAESABAARh54jnC%2Bbkuk%2BZFq%2BiAHzQ%3D%3D&isc=1&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IkU1RDJGMEY4REE5M0I2NzA5QzQzQTlFOEE2MTQzQzAzRDYyRjlBODAiLCJ0eXAiOiJKV1QiLCJ4NXQiOiI1ZEx3LU5xVHRuQ2NRNm5vcGhROEE5WXZtb0EifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2sub2ZmaWNlLmNvbSIsInVjIjoiZTkzNzQxYjQ1YWVjNDIzOGJhMGQ1MTA3NTlkZGIxNTQiLCJ2ZXIiOiJFeGNoYW5nZS5DYWxsYmFjay5WMSIsImFwcGN0eHNlbmRlciI6Ik93YURvd25sb2FkQDg0ZGY5ZTdmLWU5ZjYtNDBhZi1iNDM1LWFhYWFhYWFhYWFhYSIsImlzc3JpbmciOiJXVyIsImFwcGN0eCI6IntcIm1zZXhjaHByb3RcIjpcIm93YVwiLFwicHVpZFwiOlwiLTM5Nzg2NDg3OTMyMzI4NzIyOTFcIixcInNjb3BlXCI6XCJPd2FEb3dubG9hZFwiLFwib2lkXCI6XCJjOGM5MDAwMC05OTUxLTZjOWQtMDAwMC0wMDAwMDAwMDAwMDBcIixcInByaW1hcnlzaWRcIjpcIlMtMS0yODI3LTMzNjg2MTU5MzYtMjU3MjI1MDI2OVwifSIsIm5iZiI6MTcxNDg0MzM3MiwiZXhwIjoxNzE0ODQzNjcyLCJpc3MiOiIwMDAwMDAwMi0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDBAODRkZjllN2YtZTlmNi00MGFmLWI0MzUtYWFhYWFhYWFhYWFhIiwiYXVkIjoiMDAwMDAwMDItMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwL2F0dGFjaG1lbnQub3V0bG9vay5saXZlLm5ldEA4NGRmOWU3Zi1lOWY2LTQwYWYtYjQzNS1hYWFhYWFhYWFhYWEiLCJoYXBwIjoib3dhIn0.kWYBf5vZTeV6c5D9qtltEEnCG3QJdQdTNPCc2J888Y8iJG-pe_AyWKg-w-fZ6RXKzWIcmF4NDxYgpHzjfaimid5AiZPNCkzyhTwNud-0uqgDEIaGayXfR_YdywNx4YIxYIZlzcgCRW6cz-zC2XuoqNxfrNVZmMAlsrCV3lnBVo5eHG1HVr7s2UEJSgcivbRGn1SAjKqnI195MpM1A8O1r2jciy-MnRwaU9IfUMhh0yD7o1yjnJhG82Fi-Q8PtQMEfz8ersDsPv_QMx_6HOIhKbL6CvVZWtsfGXkH7oLyhTcF-cpsu1u_tJiH-m5YhE40K-5wJcKI5tL1FQk_MloXSw&X-OWA-CANARY=X-OWA-CANARY_cookie_is_null_or_empty&owa=outlook.office.com&scriptVer=20240419007.27&clientId=D3281743E7C24A909F0DBCA784A3F7F7&animation=true&persistenceId=21e37010-d8d4-4d29-9bee-02650f58c4da"
      ></img>
      <br />
      <br />
      {/* Search Container and Search Component removed */}
      <br />
      <br />
      <video autoPlay loop muted src={myVideo} className="navbar-video"></video>
      <br />
      <video
        autoPlay
        loop
        muted
        src={myVideotwo}
        className="navbar-video"
      ></video>
    </div>
  );
};

export default HomePage;
