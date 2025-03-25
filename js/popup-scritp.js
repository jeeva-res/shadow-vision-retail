
// <!-- JavaScript for Modal -->

  function openModal(modalId) {
      document.getElementById(modalId).classList.add("show");
  }

  function closeModal(modalId) {
      document.getElementById(modalId).classList.remove("show");
  }

  // Close modal when clicking outside the box
  window.onclick = function(event) {
      let loginModal = document.getElementById("loginModal");
      let registerModal = document.getElementById("registerModal");

      if (event.target === loginModal) {
          closeModal("loginModal");
      }
      if (event.target === registerModal) {
          closeModal("registerModal");
      }
  };