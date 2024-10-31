Feature: Can change text
  Everybody could change text by pressing the button

  Scenario: App start
    Given app is started
    Then label should be "Hello world!"

  Scenario: Change label text
    When I press the button
    Then label should be "Text changed!"