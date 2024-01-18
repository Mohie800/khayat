import { Container, Typography } from "@mui/material";

const ReturnPolicy = () => {
  return (
    <Container
      sx={{
        gap: 3,
        display: "flex",
        flexDirection: "column",
        maxWidth: "700px",
      }}
    >
      <div className="order-sec2">
        <div className="order-text1">سياسة الإسترجاع</div>
      </div>
      <ul>
        <li>
          <Typography
            sx={{ fontFamily: "pun", color: "#315e5e", marginBlock: 1 }}
          >
            يحق للعميل رفع طلب تعديل خلال 5 ايام من تاريخ توصيل الثياب ، في حال
            تم تجاوز عدد الايام عن 5 ايام لا يحق للعميل المطالبة بالتعديل
          </Typography>
        </li>
        <li>
          <Typography
            sx={{ fontFamily: "pun", color: "#315e5e", marginBlock: 1 }}
          >
            في حالة استحقاق العميل لاسترجاع المبلغ فإن عملية الاسترجاع تكون على
            الحساب البنكي الخاص بالعميل خلال 12 يوم عمل.
          </Typography>
        </li>
        <li>
          <Typography
            sx={{ fontFamily: "pun", color: "#315e5e", marginBlock: 1 }}
          >
            يلغى الضمان في حالة عدم التزام العميل بتعليمات القماش :
          </Typography>
          <Typography
            sx={{ fontFamily: "pun", color: "#315e5e", marginBlock: 1 }}
          >
            -عدم غسيل الثياب بالكلور
          </Typography>
          <Typography
            sx={{ fontFamily: "pun", color: "#315e5e", marginBlock: 1 }}
          >
            -عدم غسيل الثياب بمواد تسبب تلف لجودة الاقمشة
          </Typography>
        </li>
        <li>
          <Typography
            sx={{ fontFamily: "pun", color: "#315e5e", marginBlock: 1 }}
          >
            يحق للعميل إبداء أي ملاحظات للفني خلال فترة تقديم الخدمة وقبل مغادرة
            الفني الموقع.
          </Typography>
        </li>
        <li>
          <Typography
            sx={{ fontFamily: "pun", color: "#315e5e", marginBlock: 1 }}
          >
            في حالة وجود مشكلة في المنتج يجب على العميل رفع طلب شكوى على الموقع
            من خلال الرابط التالي: https://alkhayalksa.net/complaints
          </Typography>
          <Typography
            sx={{ fontFamily: "pun", color: "#315e5e", marginBlock: 1 }}
          >
            سيتم التواصل مع العميل خلال 5 أيام عمل لجدولة موعد لتنفيذ الخدمة
          </Typography>
          <Typography
            sx={{ fontFamily: "pun", color: "#315e5e", marginBlock: 1 }}
          >
            * لا يحق للعميل طلب استرجاع القيمة أو استبدال منتج الثوب بعد الدفع
            ورفع طلب التفصيل
          </Typography>
        </li>
      </ul>
    </Container>
  );
};

export default ReturnPolicy;
