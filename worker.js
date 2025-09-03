export default {
  async fetch(request, env) {
    const ref = (request.headers.get("referer") || "").toLowerCase();

    // ถ้ามาจาก Facebook หรือ Google Ads → Redirect ไปเว็บหลัก
    if (ref.includes("facebook.com") || ref.includes("google.com") || ref.includes("googlesyndication.com")) {
      return Response.redirect("https://ufawinner99.com", 302);
    }

    // ถ้าไม่ใช่ → แสดง Clean Page
    return fetch("https://promo.sportpress24.com"); // Clean Page URL
  }
}
