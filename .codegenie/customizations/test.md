# Testing Cheatsheet

## Libraries and Frameworks

- Jest: Main testing framework
- Mockito: Mocking library
- PowerMock: Advanced mocking for static methods and constructors

## Mocking and Stubbing

### Jest Mocks

```javascript
jest.mock('module-name');
const mockFunction = jest.fn();
```

### Mockito Mocks

```java
@Mock
private DependencyClass mockDependency;

when(mockDependency.method()).thenReturn(expectedValue);
```

### PowerMock for Static Methods

```java
@RunWith(PowerMockRunner.class)
@PrepareForTest({StaticClass.class})
public class TestClass {
    @Test
    public void testStaticMethod() {
        PowerMockito.mockStatic(StaticClass.class);
        when(StaticClass.staticMethod()).thenReturn(expectedValue);
    }
}
```

## Fake Implementations

### In-Memory Repositories

```java
public class InMemoryUserRepository implements UserRepository {
    private Map<String, User> users = new HashMap<>();

    @Override
    public User findById(String id) {
        return users.get(id);
    }

    // Other methods...
}
```

### Test Doubles

```java
public class TestNetworkClient implements NetworkClient {
    @Override
    public Response send(Request request) {
        // Simulate network behavior
        return new Response(200, "OK");
    }
}
```

## Test Structure

- Use descriptive test names: `should_returnUser_when_validIdProvided()`
- Arrange-Act-Assert pattern
- Use `@Before` or `@BeforeEach` for setup
- Use `@After` or `@AfterEach` for cleanup

## Assertion Styles

### JUnit Assertions

```java
assertEquals(expected, actual);
assertTrue(condition);
assertThrows(ExpectedException.class, () -> { /* code */ });
```

### AssertJ Fluent Assertions

```java
assertThat(actual).isEqualTo(expected);
assertThat(list).hasSize(5).contains(element);
```

## Parameterized Tests

```java
@ParameterizedTest
@ValueSource(strings = {"apple", "banana", "cherry"})
void testWithParameters(String fruit) {
    assertNotNull(fruit);
}
```

## Test Coverage

- Aim for high code coverage (e.g., >80%)
- Use JaCoCo for coverage reports

## Integration Tests

- Use `@SpringBootTest` for Spring Boot applications
- Mock external dependencies (e.g., databases, APIs)

## Performance Tests

- Use JMH (Java Microbenchmark Harness) for microbenchmarks
- Set up separate performance test suites

## Best Practices

1. Test one behavior per test method
2. Use meaningful test data
3. Avoid testing private methods directly
4. Keep tests independent and isolated
5. Use test-driven development (TDD) when possible
6. Regularly run and maintain tests