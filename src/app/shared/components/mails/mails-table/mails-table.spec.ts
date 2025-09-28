import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailsTable } from './mails-table';

describe('MailsTable', () => {
  let component: MailsTable;
  let fixture: ComponentFixture<MailsTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailsTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailsTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
