import { Container, Typography } from "@mui/material";

const Delivery = () => {
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
        <div className="order-text1">سياسة التوصيل والخدمة</div>
      </div>
      <ul>
        <li>
          <Typography
            sx={{ fontFamily: "pun", color: "#315e5e", marginBlock: 1 }}
          >
            التوصيل و الخدمة مجانية لجميع المدن التي تقع ضمن نطاق تغطية الخيال
            والتي أعلن عن تضمينها في الخدمات المجانية في المملكة العربية
            السعودية
          </Typography>
        </li>
        <li>
          <Typography
            sx={{ fontFamily: "pun", color: "#315e5e", marginBlock: 1 }}
          >
            في حال كان العميل خارج نطاق التغطية، لا نقوم بالخدمة ويتحمل العميل
            تكلفة الشحن حسب الوسيلة المناسبة له. وفي حال عدم الاتفاق على الشحن
            يتم إعادة المبلغ المدفوع للعميل عن طريق الوسيلة التي تم الدفع من
            خلالها أو من خلال تحويل بنكي لحساب العميل.
          </Typography>
        </li>
        <li>
          <Typography
            sx={{ fontFamily: "pun", color: "#315e5e", marginBlock: 1 }}
          >
            عادة يتم التوصيل والخدمة خلال يوم إلى 14 يوم عمل حسب الجدول المتاح
            للخدمة، وبالنسبة لطلبات الشحن يتم شحنها خلال 3 أيام مع الاتفاق مع
            العميل على وسيلة الشحن المناسبة لمنطقته
          </Typography>
        </li>
        <li>
          <Typography
            sx={{ fontFamily: "pun", color: "#315e5e", marginBlock: 1 }}
          >
            التيتم التواصل مع العملاء خلال يوم إلى 7 أيام عمل لجدولة مواعيد
            الخدمة
          </Typography>
        </li>
        <li>
          <Typography
            sx={{ fontFamily: "pun", color: "#315e5e", marginBlock: 1 }}
          >
            الخيال لن يتعامل أو يقدّم خدمات أو منتجات لأي من الدول التي عليها
            عقوبات من مكتب مراقبة الأصول الأجنبية (OFAC) وذلك وفقاً للقوانين
            المعمول بها في المملكة العربية السعودية.
          </Typography>
        </li>
      </ul>
    </Container>
  );
};

export default Delivery;
